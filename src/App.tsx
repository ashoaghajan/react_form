import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 caracters or less').required('Required'),
      surname: Yup.string().max(15, 'Must be 20 caracters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: (values) => console.log(values)
  });

  const { values, errors, touched } = formik;

  return (
    <div className="App">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <input id='name' type="text" placeholder="Name" onBlur={formik.handleBlur}
            value={values.name} onChange={formik.handleChange}/>
          {errors.name && touched.name && <p>{errors.name}</p>}  
        </div>
        <div className="input-container">
          <input id='surname' type="text" placeholder="Surname" onBlur={formik.handleBlur}
            value={values.surname} onChange={formik.handleChange}/>
          {errors.surname && touched.surname && <p>{errors.surname}</p>}
        </div>
        <div className="input-container">
          <input id='email' type="email" placeholder="Email" onBlur={formik.handleBlur}
            value={values.email} onChange={formik.handleChange}/>
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
