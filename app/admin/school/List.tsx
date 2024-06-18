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
  
  
  interface ISchool {
    id:number,
    nome:string,
  }

  export default async function ListSchool() {
    const schools = await list()
    async function list(){
     revalidatePath("/admin/school")
     const response = await fetch("https://server20241-nine.vercel.app/school");
     return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Escolas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schools.map((item:ISchool) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.nome}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  