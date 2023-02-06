import { Title } from "livi-poc-core"
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from 'chart.js'

interface WorkstationData {
    label: string
    color: string
    data: number
}

const demoData: WorkstationData[] = [
    { label: "Company Detail Management", color: "#EEB155", data: 3 },
    { label: "User Management", color: "#A796CC", data: 4 },
    { label: "Transaction", color: "#88b1DB", data: 7 },
    { label: "Personal Management", color: "#CD808B", data: 4 },
    { label: "Settings", color: "#D3BC8D", data: 2 },
]

const ComputeData = (data: WorkstationData[]) => {
    return {
        labels: data.map(x => x.label),
        datasets: [{
            label: "Pending For Approval",
            data: data.map(x => x.data),
            backgroundColor: data.map(x => x.color),
            hoverOffset: 4,
            cutout: "75%"
        }]
    }
}

const DemoWidget = () => {
    const data = ComputeData(demoData)

    Chart.register(ArcElement)
    return (
        <div className="rounded-lg flex flex-col w-full h-full justify-between shadow-lg border border-slate-100">
            <div className=" rounded-t-lg bg-slate-200 p-4 flex flex-row justify-between">
                <Title className="font-black" children="WorkStation" />
                <Title bold className=" text-blue-500 hover:underline hover:font-black" children="View All >" />
            </div>
            <div className="p-4 flex flex-col items-center justify-between">
                <div className="relative max-w-[150px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Title className="text-4xl font-black" children={`${demoData.map(x => x.data).reduce((a, b) => a + b)}`}/>
                        <p>tasks</p>
                    </div>
                    <Doughnut
                        data={data}
                    />
                </div>
                <div className="w-full mt-4 flex flex-col items-start justify-between">
                    <Title className="font-black" children="Pending For Approval" />
                    {
                        demoData.map(x => {
                            return (
                                <div className="flex flex-row my-2 w-full items-center">
                                    <div className={`rounded-full w-3 h-3 bg-[${x.color}]`}></div>
                                    <Title className="w-full mx-3" children={x.label} />
                                    <p>{x.data}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DemoWidget