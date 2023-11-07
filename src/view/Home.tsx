import { useState, useEffect, ChangeEvent } from 'react';
import { MoveDown } from 'lucide-react';

import { Input } from './components/Input';

export function Home() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (binary && !binary.match(/^[01]+$/)) {
      setHasError(true);
    } else {
      setHasError(false);
      setDecimal(binaryToDecimal(binary));
    }
  }, [binary]);

  function handleBinaryChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setBinary(value);
  }

  function binaryToDecimal(value: string): number {
    let decimal = 0;
    for (let i = 0; i < value.length; i++) {
      const currentValue = value.charAt(value.length - (i + 1));
      const solvedValue = Number(currentValue) * Math.pow(2, i);
      decimal += solvedValue;
    }

    return decimal;
  }

  return (
    <div className="h-full min-h-screen bg-zinc-900">
      <section className="relative flex h-[calc(100vh-64px)] flex-col items-center justify-center bg-zinc-950 shadow-2xl">
        <a
          href="#what-is-a-binary"
          className="absolute bottom-14 text-green-500"
        >
          <MoveDown size={32} />
        </a>
        <h1 className="mb-5 text-center text-2xl font-bold text-zinc-100 xl:text-3xl">
          Bin
          <span className="relative top-[1px] bg-gradient-to-l from-green-300 to-green-700 bg-clip-text text-transparent">
            2Dec
          </span>
        </h1>
        <div className="flex w-full flex-col gap-6 p-4 md:w-[480px] xl:w-[720px]">
          <Input
            id="binary"
            label="Digite o número binário"
            value={binary}
            onChange={handleBinaryChange}
            error={
              hasError ? 'O binário deve conter apenas os dígitos 0 e 1.' : ''
            }
          />

          <Input
            label="Resultado em decimal"
            value={hasError ? 0 : decimal}
            readOnly
            disabled
          />
        </div>
      </section>

      <section
        id="what-is-a-binary"
        className="flex flex-col items-center p-4 pt-12"
      >
        <h2 className="mb-4 text-xl font-bold tracking-[-0.625px] text-zinc-100 md:text-2xl">
          O que é um número binário?
        </h2>
        <p className="flex w-full flex-col gap-2 leading-5 text-zinc-300 md:w-[580px] md:text-lg xl:w-[820px]">
          <span>
            Um número binário é um sistema numérico fundamental na computação.
            Ao contrário do sistema decimal, que usamos no dia a dia e inclui os
            dígitos de 0 a 9, o sistema binário utiliza apenas dois dígitos: 0 e
            1. Cada dígito em um número binário é chamado de "bit".
          </span>
          <span>
            No sistema binário, cada posição representa uma potência de 2. Por
            exemplo, o dígito mais à direita representa 2º (ou 1), o próximo
            dígito à esquerda representa 2¹ (ou 2), o próximo representa 2² (ou
            4), e assim por diante. Ao combinar esses dígitos de 0 e 1 em várias
            posições, podemos representar números inteiros no sistema binário.
            Por exemplo, o número binário "1010" representa: (1 x 2³) + (0 x 2²)
            + (1 x 2¹) + (0 x 2º) = 8 + 0 + 2 + 0 = 10 em decimal.
          </span>
          <span>
            Os números binários são cruciais na computação porque os
            computadores digitais armazenam e manipulam dados usando combinações
            de bits. Cada caractere, número ou instrução em um computador é
            representado internamente em forma binária. Entender como converter
            números binários em números decimais (sistema que usamos comumente)
            e vice-versa é fundamental para trabalhar com programação,
            codificação e tecnologia digital.
          </span>
          <span>
            A aplicação que você está utilizando, Bin2Dec, é uma ferramenta
            simples que ajuda a converter sequências de números binários em
            números decimais. É uma maneira prática de entender como os
            computadores processam e interpretam dados binários, mesmo para
            aqueles que não têm experiência em programação.
          </span>
        </p>
      </section>
    </div>
  );
}
