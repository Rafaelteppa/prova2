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
  
  
  interface IBoock {
    id:number,
    name:string,
    email:string
  }

  export default async function ListBoock() {
    const boocks = await list()
    async function list(){
     revalidatePath("/admin/boock")
     const response = await fetch("https://server20241-nine.vercel.app/courses");
     return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Livros</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {boocks.map((item:IBoock) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  