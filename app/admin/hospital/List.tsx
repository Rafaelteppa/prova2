import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { revalidatePath } from "next/cache";
  
  
  interface IHospital {
    id:number,
    nome:string,
  }

  export default async function ListHospital() {
    const hospitais = await list()
    async function list(){
     revalidatePath("/admin/hospital")
     const response = await fetch("https://server20241-nine.vercel.app/hospital");
     return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Hospitais</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hospitais.map((item:IHospital) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.nome}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  