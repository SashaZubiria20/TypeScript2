// Llamado a axios
import axios from 'axios';
import type { Pokemon } from './interfacePokemon';

/*
    Cundo usamos la interface (Pokemon) en un formato generico, no estamos transformando la respuesta, solamente que al hacerlo, le decimos a ts que la peticion ahora va a ser de ese tipo (Pokemon) lo que permite que ts nos ayude, si yo pongo un . despues de data, me da las opciones disponibles

    El tipo de retorno de la funcion tambien lo podemos poner de tipo de la interface creada (Pokemon)

    URL API: https://pokeapi.co/
*/

export const getPokemon = async(pokemonId:number): Promise<Pokemon> => {
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    return data;
}