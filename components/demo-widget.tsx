import { Card, CardBody, Stack } from "livi-poc-core"
import { Input } from "livi-poc-form"

const DemoWidget = () => {
    return (
        <Card override>
            <CardBody>
                <div style={{display: 'none'}} className='flex-1 p-4 w-full gap-5 flex flex-col gap-2'></div>
                <Stack className="gap-5">
                    <Input type="text" placeholder="search" id="search" validate={() => true} className='p-2 px-3 bg-primary text-secondary font-bold rounded-lg' override></Input>
                    <Stack spacing='sm'>
                        <p className="text-sm text-slate-300 font-semibold">Welcome Back, </p>
                        <p className="text-2xl text-primary font-extrabold">liviSave User!</p>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default DemoWidget