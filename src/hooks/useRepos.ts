import {useQuery} from '@tanstack/react-query';
import api from "../api/github";
import { Repository } from './types';

async function fecthRepos() {
    const {data} = await api.get<Repository[]>('/users/lonperman/repos')
    return data
}

export function useFetchRepositories() {
    return useQuery(['repos'],fecthRepos)
}

