import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { InputText } from '../../../../helpers/FormInputs'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const ModalAddStudent = () => {

    const initVal = {
        student_name: "",
        student_class: "",
        student_age: "",
    }

    const yupSchema = Yup.object({
        student_name: Yup.string().required("Required"),
        student_class: Yup.string().required("Required"),
        student_age: Yup.number().required("Required"),
    })
  return (
  
    <ModalWrapper>

        <div className="main-modal w-[300px] bg-secondary text-content h-full">
            <div className="modal-header p-4 realtive">
                <h2>New Student</h2>
                <button className='absolute top-[25px] right-4'><LiaTimesSolid/></button>
                </div>
            <div className="modal-body p-4">
                <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async(values) => {
                          console.log(values)  
                    }}
                >

                {(props) => {return(
                    <Form action="" className='flex flex-col justify-between h-[calc(100vh-110px)]'>
                    <div className='grow overflow-y-auto'>
                    <div className="input-wrap">
                        <InputText
                            label="Name"
                            type="text"
                            name="student_name"
                        />
                    </div>
                    <div className="input-wrap">
                    <InputText
                            label="Class"
                            type="text"
                            name="student_class"
                        />
                    </div>
                    {/* <div className="input-wrap">
                        <label htmlFor="">Gender</label>
                       <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                       </select>
                        <small className='error-msg'>Required*</small>
                    </div> */}
                    <div className="input-wrap">
                    <InputText
                            label="Age"
                            type="text"
                            name="student_age"
                        />
                    </div>
                    </div>

                    <div className="form-action flex">
                        <button className='btn btn--accent btn-form ' type='submit'>Add<SpinnerButton/></button>
                        <button className='btn btn-disable' type='button'>Cancel</button>
                    </div>
                </Form>
                ) }}
                
                </Formik>
                </div>
        </div>
    </ModalWrapper>
  
  )
}

export default ModalAddStudent