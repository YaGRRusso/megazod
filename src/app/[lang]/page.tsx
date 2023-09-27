import Image from 'next/image'
import Links from './components/Links'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Image src="/megazod.png" alt="logo" width={420} height={420} />
      <h1 className="text-3xl font-bold text-primary">Megazod</h1>
      <p>
        Talk sobre abordagens de formulários em React/Next tratando erros de
        digitação, formatação e verificação de dados no lado do client no pré
        envio de formulários
      </p>
      <Links />
    </div>
  )
}
