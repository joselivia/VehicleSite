import Image from "next/image";

export default function Customer() {
    return (
        <section className="py-15 px-4">
            <div className="grid grid-cols-2 py-15">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/bg1.png" width={600}
                height={600} alt=".."/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/bg1.png" width={600}
                height={600} alt=".."/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/bg1.png" width={600}
                height={600} alt=".."/>
            <h2>Safaricom</h2>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/bg1.png" width={600}
                height={600} alt=".." />
            <h2>Safaricom</h2>
        </div>
    </div>
   
    </section>



    )}