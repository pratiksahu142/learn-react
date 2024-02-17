function Scientist({scientist, width=70, height=70}) {
    return (
          <section className="profile">
            <h2>{scientist.name}</h2>
            <img
              className={scientist.imgClass}
              src={'https://i.imgur.com/' + scientist.imgSrc + 's.jpg'}
              alt={scientist.name}
              width={width}
              height={height}
            />
            <ul>
              <li>
                <b>Profession: </b>
                {scientist.profession}
              </li>
              <li>
                <b>Awards: {scientist.numberOfAwards} </b>
                {scientist.awards}
              </li>
              <li>
                <b>Discovered: </b>
                {scientist.discovered}
              </li>
            </ul>
          </section>
    );
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist scientist={{
        name:'Maria Skłodowska-Curie',
        imgClass: 'avatar',
        imgSrc: 'szV5sdG',
        profession: 'physicist and chemist',
        numberOfAwards: '4',
        awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
        discovered: 'polonium (element)'}}/>

      <Scientist scientist={{
        name:'Katsuko Saruhashi',
        imgClass: 'avatar',
        imgSrc: 'YfeOqp2',
        profession: 'geochemist',
        numberOfAwards: '2',
        awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
        discovered: 'a method for measuring carbon dioxide in seawater'}}/>
    </div>
  );
}
