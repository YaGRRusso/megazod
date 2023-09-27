import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Image src="/megazod.png" alt="logo" width={420} height={420} />
    </div>
  )
}
