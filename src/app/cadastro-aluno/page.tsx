"use client";
import React from 'react'
import img_cadastro from "/public/img_cadastro.png"
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome inválido'),
  email: Yup.string().email('Email Inválido').required('Email Inválido'),
  senha: Yup.string().min(10, 'Senha muito Curta').required('Senha Inválida'),
  confirme_senha: Yup.string().oneOf([Yup.ref("senha")] , "As senhas não coincidem").required("Senha Inválida"),
  curso: Yup.string().required('Curso inválido'),
  departamento: Yup.string().required('Departamento Inválida')
});

const entradas = ["nome", "email", "senha", "confirme_senha", "curso", "departamento"];

// Verifica se é um input de senha
const ehsenha = (entrada : string) : string => ["senha", "confirme_senha"].includes(entrada) ? "password" : "text" 

const initialValues = {
  nome: "",
  email: "",
  senha: "",
  confirme_senha: "",
  curso: "",
  departamento: ""
};

const onSubmit = (values: Object) => {
  console.log("ola")
};

const CadastroAluno = () => {
  return (
    <main className="h-screen w-full flex">
        <div className='h-full, w-1/2'>
            <Image src={img_cadastro} alt="Cadastro" className="h-full w-full"></Image>
        </div> {/* Imagem*/}

        <div className='h-full w-1/2 flex flex-col items-center justify-center gap-10 bg-[#EDEDED]'>
            <p className='text-5xl leading-10 font-Questrial'>Cadastro Usuário</p>

            <div className='w-1/2'>
              <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={onSubmit}
              >
              <Form className='flex flex-col gap-5'>
              {entradas.map((entrada) =>(
              <div key={entrada}>
                <Field type={ehsenha(entrada)} name={entrada} placeholder={entrada.replace("_", " ")} className="inputs"/>
                <ErrorMessage name={entrada} className='text-red-600' component="div" />
              </div>
              ))}
              <button type="submit" className='bg-[#A4FED3] w-fit  m-auto p-2 pl-4 pr-4 rounded-lg'> Criar Conta </button>
              </Form>
              </Formik>
            </div>
        </div> {/* Cadastro*/}
    </main>
  )
}

export default CadastroAluno
