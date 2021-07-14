import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades){
  return(
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>

  )
}

export default function Home() {
  const usuario = 'r25ta'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea:'profileArea'}}>
          <ProfileSidebar githubUser={usuario}/>
 
        </div>
        <div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
          <box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet/>
          </box>
        </div>
        <div className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                    <img src={`https://github.com/${item}.png`} />
                    <span>{item}</span>
                    </a>    
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
    )
}
