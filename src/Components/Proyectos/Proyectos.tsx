import './Proyectos.css';
import ProyectoCard from './ProyectoCard';
import type { IProyecto } from '../../Interfaces/IProyecto';
import { proyectos } from '../../Const/Proyectos';
import { useContext } from 'react';
import { lenguagueContext } from '../../Services/Lenguague';

const Proyectos = () => {
  const { spanish, ProyectosTitulos } = useContext(lenguagueContext);
  const cal1 : Array<IProyecto> = proyectos.filter((_, i) => i % 2 === 0);
  const cal2 : Array<IProyecto> = proyectos.filter((_, i) => i % 2 === 1);
  return (
    <section className="proyectos-section" id='proyectos'>
      <h1>{spanish ? ProyectosTitulos.proyectos : ProyectosTitulos.proyects}</h1>
      <div className='grid-proyecto'>
        <div className='col'>{cal1.map((proyecto, id) => {
          return (
            <ProyectoCard
              key={id}
              proyecto={proyecto}
            />
          );
        })}</div>
        <div className='col'>{cal2.map((proyecto, id) => {
          return (
            <ProyectoCard
              key={id}
              proyecto={proyecto}
            />
          );
        })}</div>
      </div>
    </section>
  );
};

export default Proyectos;