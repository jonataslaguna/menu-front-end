import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../API/fetchDataMenu';

export function useMenuData(endpoint: string){
    const query = useQuery({
        queryFn: () => fetchData(endpoint),
        queryKey: ['menu-data'],
        retry: 2,
    })

    return {
        ...query,
        data: query.data,
    }
}