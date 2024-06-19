import { Button } from "@/components/ui/button";
import ListHospital  from "./List";


export default function Hospital() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/hospital/new">
                    <Button>Cadastrar Hospital</Button>
                </a>
            </div>
            <ListHospital />
        </div>
    )
}