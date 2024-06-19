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
  
  
  interface IPatient {
    id:number,
    name:string,
    age:number,
  }

  export default async function ListPatient() {
    const patients = await list()
    async function list(){
     revalidatePath("/admin/patient")
     const response = await fetch("https://server20241-nine.vercel.app/patient");
     return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Pacientes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>IDADE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((item:IPatient) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  