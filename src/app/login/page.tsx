'use client';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer , toast} from 'react-toastify'
import * as Yup from 'yup';

interface formvalues {
  email: string;
  password: string;
}

const LoginPage = () => {
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'), // validação do yup
});

const onSubmit = (values:formvalues, actions: any) =>{
  console.log(values); // ISSO AQUI É UMA SIMULKAÇÃO DE API, TEM QUE MUDAR DPS

  setTimeout(() => {
    actions.setSubmitting(false);
    toast.success('Login bem-sucedido!',{icon: (<div className="icon-check"></div>),});
  }, 1000);
};


  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="w-full sm:w-1/2 h-full">
        <img
          src="/ImagemLogin.svg"
          alt="Descrição da imagem"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-shrink-0 flex-1 min-w-[50%] flex items-center justify-center bg-[#EDEDED]">
        <div className="flex-shrink-0 w-full max-w-[400px] mx-auto">
          <h1 className="text-5xl font-Questrial mb-6 text-center">
            Avaliação de Professores
          </h1>
          <Formik
            initialValues={{email: '', password:''}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
              <Form className="space-y-4">
              <div>
              <Field
              type="email"

              name="email"
              placeholder="Email"
              className="w-full max-w-[500px] min-w-[300px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
            />
            <ErrorMessage
            component="div"
            name="email"
            className="text-red-500 text-sm mt-1"
            /></div>
            <div>
            <Field
              type="password"
              name="password"
              placeholder="Senha"
              className="w-full max-w-[500px] min-w-[300px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
            />
            <ErrorMessage
            component="div"
            name="password"
            className="text-red-500 text-sm mt-1"
            />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[#A4FED3] text-[#222E50] font-Questrial rounded-lg border border-[#222E50] "
              >
                Entrar
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-[#A4FED3] text-[#222E50] font-Questrial rounded-lg border border-[#222E50]"
              >
                Criar Conta
              </button>
            </div>
          </Form>
                          </Formik>
                          <ToastContainer />
        </div>
      </div>
    </div>
  )}
export default LoginPage;