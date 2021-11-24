import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
const Content = () => {
  const [films, setFilms] = useState([]);
  const [activeFilm, setActiveFilm] = useState({});
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    axios.get('https://swapi.dev/api/films').then((response) => {
      console.log(response.data.results);
      setFilms(response.data.results);
    });
  }, []);
  useEffect(() => {
    setActiveFilm(JSON.parse(window.localStorage.getItem('activeFilm')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('activeFilm', JSON.stringify(activeFilm));
  }, [activeFilm]);
  useEffect(() => {
    setValue(window.localStorage.getItem('value'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('value', value);
  }, [value]);
  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((response) => {
      setPeople(response.data.results);
    });
  }, []);
  useEffect(() => {
    axios.get('https://swapi.dev/api/planets').then((response) => {
      // console.log(response.data.results);
      setPlanets(response.data.results);
    });
  }, []);
  useEffect(() => {
    axios.get('https://swapi.dev/api/species').then((response) => {
      // console.log(response.data.results);
      setSpecies(response.data.results);
    });
  }, []);
  useEffect(() => {
    axios.get('https://swapi.dev/api/starships').then((response) => {
      // console.log(response.data.results);
      setStarships(response.data.results);
    });
  }, []);
  useEffect(() => {
    axios.get('https://swapi.dev/api/vehicles').then((response) => {
      console.log(response.data.results);
      setVehicles(response.data.results);
    });
  }, []);
  const dataCreated = new Date(activeFilm.created);
  const dataEdited = new Date(activeFilm.edited);
  const filteredFilms = films.filter((v) =>
    v.title.toLowerCase().includes(value.toLowerCase())
  );
  const filteredPeople = people.filter((v) =>
    v.name.toLowerCase().includes(value.toLowerCase())
  );
  const filteredPlanets = planets.filter((v) =>
    v.name.toLowerCase().includes(value.toLowerCase())
  );
  const filteredSpecies = species.filter((v) =>
    v.name.toLowerCase().includes(value.toLowerCase())
  );
  const filteredStarships = starships.filter((v) =>
    v.name.toLowerCase().includes(value.toLowerCase())
  );
  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: 'gray',
          minHeight: '100vh',
          maxHeight: '100%',
          width: '20vw',
        }}
      >
        {films.map((v) => (
          <div key={v.episode_id}>
            <div
              style={{
                cursor: 'pointer',
                fontWeight: '600',
                marginTop: '3px',
                marginLeft: '5px',
              }}
              onClick={() => setActiveFilm(v)}
            >
              {v.title}
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '80vw' }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            margin: '15px 0 15px 15px',
          }}
          onChange={(e) => setValue(e.target.value)}
        />
        <div style={{ margin: '15px 0 15px 15px' }}>
          {value !== '' ? filteredFilms.map((n) => <div>{n.title}</div>) : ''}
          {value !== '' ? filteredPeople.map((n) => <div>{n.name}</div>) : ''}
          {value !== '' ? filteredPlanets.map((n) => <div>{n.name}</div>) : ''}
          {value !== '' ? filteredSpecies.map((n) => <div>{n.name}</div>) : ''}
          {value !== ''
            ? filteredStarships.map((n) => <div>{n.name}</div>)
            : ''}
          {value !== '' ? filteredVehicles.map((n) => <div>{n.name}</div>) : ''}
        </div>
        <div>
          {Object.keys(activeFilm).length != 0 ? (
            <div style={{ paddingLeft: '10px' }}>
              <div>
                <span className="title">Film:</span> {activeFilm.title}
              </div>
              <div>
                <span className="title">Opening:</span>
                {activeFilm.opening_crawl}
              </div>
              <div>
                <span className="title">Director:</span> {activeFilm.director}
              </div>
              <div>
                <span className="title">Producers:</span> {activeFilm.producer}
              </div>
              <div>
                <span className="title"> Characters:</span>
                {activeFilm.characters.map((c) =>
                  people.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={people.find((el) => el.url == c).name}
                    >
                      {/* <a href={people.find((el) => el.url == c).url}> */}
                      {people.find((el) => el.url == c).name}
                      {/* </a> */}
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div>
                <span className="title">Created:</span>
                {dataCreated.getFullYear()}-{dataCreated.getMonth() + 1}-
                {dataCreated.getDate()}
              </div>
              <div>
                <span className="title">Edited:</span>
                {dataEdited.getFullYear()}-{dataEdited.getMonth() + 1}-
                {dataEdited.getDate()}
              </div>
              <div>
                <span className="title">Release date:</span>
                {activeFilm.release_date}
              </div>
              <div>
                <span className="title">Planets:</span>
                {activeFilm.planets.map((c) =>
                  planets.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={planets.find((el) => el.url == c).name}
                    >
                      {/* <a href={people.find((el) => el.url == c).url}> */}
                      {planets.find((el) => el.url == c).name}
                      {/* </a> */}
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div>
                <span className="title">Species:</span>
                {activeFilm.species.map((c) =>
                  species.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={species.find((el) => el.url == c).name}
                    >
                      {/* <a href={people.find((el) => el.url == c).url}> */}
                      {species.find((el) => el.url == c).name}
                      {/* </a> */}
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div>
                <span className="title">Starships:</span>
                {activeFilm.starships.map((c) =>
                  starships.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={starships.find((el) => el.url == c).name}
                    >
                      {/* <a href={people.find((el) => el.url == c).url}> */}
                      {starships.find((el) => el.url == c).name}
                      {/* </a> */}
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div>
                <span className="title">Vehicles:</span>
                {activeFilm.vehicles.map((c) =>
                  vehicles.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={vehicles.find((el) => el.url == c).name}
                    >
                      {/* <a href={people.find((el) => el.url == c).url}> */}
                      {vehicles.find((el) => el.url == c).name}
                      {/* </a> */}
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div>
          {Object.keys(activeFilm).length != 0 ? (
            <div style={{ display: 'flex', marginLeft: '10px' }}>
              <div className="link-wrap">
                <span className="title"> Characters:</span>
                {activeFilm.characters.map((c) =>
                  people.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={people.find((el) => el.url == c).name}
                    >
                      <a href={people.find((el) => el.url == c).url}>
                        {people.find((el) => el.url == c).name}
                      </a>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div className="link-wrap">
                <span className="title">Planets:</span>
                {activeFilm.planets.map((c) =>
                  planets.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={planets.find((el) => el.url == c).name}
                    >
                      <a href={planets.find((el) => el.url == c).url}>
                        {planets.find((el) => el.url == c).name}
                      </a>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div className="link-wrap">
                <span className="title">Species:</span>
                {activeFilm.species.map((c) =>
                  species.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={species.find((el) => el.url == c).name}
                    >
                      <a href={species.find((el) => el.url == c).url}>
                        {species.find((el) => el.url == c).name}
                      </a>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div className="link-wrap">
                <span className="title">Starships:</span>
                {activeFilm.starships.map((c) =>
                  starships.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={starships.find((el) => el.url == c).name}
                    >
                      <a href={starships.find((el) => el.url == c).url}>
                        {starships.find((el) => el.url == c).name}
                      </a>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div className="link-wrap">
                <span className="title">Vehicles:</span>
                {activeFilm.vehicles.map((c) =>
                  vehicles.some((el) => el.url == c) ? (
                    <div
                      style={{ marginLeft: '6vw' }}
                      key={vehicles.find((el) => el.url == c).name}
                    >
                      <a href={vehicles.find((el) => el.url == c).url}>
                        {vehicles.find((el) => el.url == c).name}
                      </a>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default Content;
