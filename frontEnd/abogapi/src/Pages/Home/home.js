import React from 'react';
import Layout from "../../components/layout/layout";
import ContainerAbogados from "./../../components/petitions/abogapi"
export default function HomePage(){
  return(
      <div>
        <Layout/> {/* Aqui despliega navbar */}
        <ContainerAbogados/>
      </div>
);
}
