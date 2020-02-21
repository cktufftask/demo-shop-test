export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';



export const FilterTasks= value=> {
  return {type: SEARCH, value};
}

export const FilterPrice= value=> {
    return {type: FILTER, value};
  }
