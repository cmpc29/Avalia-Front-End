import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3000'
})

const postUser = async (data:CreateUserDto) =>{
    await api.post('/user',{...data})
    .then(function(data){
        console.log(data)
    })
}

const getOneUser = async (id:number) =>{
    await api.get(`/user/${id}`)
    .then(function(data){
        console.log(data)
    })
}

const patchUser = async (data:UpdateUserDto) =>{
    await api.patch(`/user/${id}`,{
        headers:{Authorization:`Bearer ${token}`}
    })
    .then(function(data){
        console.log(data)
    })
}

const deleteUser = async (data:CreateUserDto,token:User) =>{
    await api.delete('/user',{
        headers:{Authorization:`Bearer ${token}`}
    })
    .then(function(data){
        console.log(data)
    })
}




// const getAllUsers = async () =>{
//     await api.get("/user")
//     .then(function(data){
//         console.log(data)
//     })
// }
// api.get("/user/3").then(function(data){
//     console.log(data);
// })
// const postUser = async(data:) => {
//     await api.post("/user",data);

// }

// export const getServerSideProps: GetServerSideProps<AvaliacaoPageProps> = async ({ params }) => {
//     const { id } = params as { id: string }; 
  
//     return axios.get(`http://localhost:3001/avaliacao/${id}`)
//       //Caso o ID exista
//       .then(async (avaliacaoResponse) => {
//         const avaliacao: Avaliacao = avaliacaoResponse.data;
  
//         // Fetching comments
//         const comentariosResponse = await axios.get(`http://localhost:3001/comentario/avaliacao/${id}`);
//         const comentarios: Comentario[] = comentariosResponse.data;
  
//         return {
//           props: { avaliacao, comentarios },
//         };
//       })
//       //Caso o ID não exista
//       .catch((error) => {
//         if (axios.isAxiosError(error) && error.response?.status === 404) {
//           return {
//             redirect: {
//               destination: '/404', //tela específica de erro
//               permanent: false,
//             },
//           };
//         }
//         throw error; // Se não for um erro de resposta 404 (ID solicitado não pode ser encontrado no servidor), lança o erro novamente
//       });
//   };
  