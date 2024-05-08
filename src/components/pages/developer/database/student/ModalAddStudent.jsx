import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { InputText } from '../../../../helpers/FormInputs'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'

const ModalAddStudent = ({setIsAdd, setMessage, setIsSuccess, itemEdit}) => {

    const handleClose = () => setIsAdd(false)


    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/student/${itemEdit.student_aid}` : `/v1/student`,
            itemEdit ? "put" :"post",
            values
        ),
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["student"] });
        if (data.success) {
            setIsAdd(false);
            setIsSuccess(true);
            setMessage(`Successfuly updated.`);
        } else {
            setIsError(true);
        }
      
        },
    });

    const initVal = {
        student_name: itemEdit ? itemEdit.student_name : "",
        student_class: itemEdit ? itemEdit.student_class : "",
        student_age: itemEdit ? itemEdit.student_age : "",
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
                <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
            <div className="modal-body p-4">
                <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async(values) => { 
                        mutation.mutate(values)
                    }}
                >

                {(props) => {return(
                    <Form className='flex flex-col justify-between h-[calc(100vh-110px)]'>
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
                        <button className='btn btn--accent btn-form ' type='submit'>{mutation.isPending ? <SpinnerButton/>  : "Add"}</button>
                        <button className='btn btn-disable' type='button' onClick={handleClose}>Cancel</button>
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