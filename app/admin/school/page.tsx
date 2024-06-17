import { Button } from "@/components/ui/button";
import ListSchool  from "./List";


export default function School() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/school/new">
                    <Button>Cadastrar Escola</Button>
                </a>
            </div>
            <ListSchool />
        </div>
    )
}