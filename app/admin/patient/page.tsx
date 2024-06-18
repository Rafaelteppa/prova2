import { Button } from "@/components/ui/button";
import ListPatient from "./List";


export default function patient() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/patient/new">
                    <Button>Cadastrar Paciente</Button>
                </a>
            </div>
            <ListPatient />
        </div>
    )
}