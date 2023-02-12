export default function Character({ character }) {
  console.log('character', character)
    return (
      <div>
        <img src={character.photoUrl} alt="" />
        <div>
          <h1>{ character.name }</h1>
          <p>Affiliation: { character.affiliation }</p>
        </div>
      </div>
    )
  }

  export async function getStaticProps({ params }) {
    const name = params.name
    const results = await fetch(`https://last-airbender-api.fly.dev/api/v1/characters?name=${name}`).then(res => res.json());
    console.log('params', params)
    return {
      props: {
        character: results[0]
      }
    }
  }


  export async function getStaticPaths() {
    const characters = await fetch('https://last-airbender-api.fly.dev/api/v1/characters').then(res => res.json());
    
    const paths = characters.map(character => {
      const name = character.name;
      console.log('paths', name)
      return {
        params: {
          name
        }
      }
    });
    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }