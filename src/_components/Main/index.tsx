import * as mainS from '@/_components/Main/styles/styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <mainS.Wrapper>
    <mainS.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <mainS.Title>{title}</mainS.Title>
    <mainS.Description>{description}</mainS.Description>
    <mainS.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </mainS.Wrapper>
)

export default Main
