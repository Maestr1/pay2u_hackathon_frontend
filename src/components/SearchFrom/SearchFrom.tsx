import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../images/icons/search_icon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import api from '../../utils/api/Api';
import _ from 'lodash';
import { Button } from '@mui/material';

interface IFormInput {
  query: string;
}

const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-block: 8px;
`;
const Input = styled.input`
  z-index: 10;
  box-sizing: border-box;
  padding-block: 6px;
  padding-right: 10px;
  padding-left: 36px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: url(${searchIcon}) no-repeat 12px 10px, var(--grey-1-search);
  font-family: InterVariable, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  caret-color: var(--navy-blue-2);
  transition: width 0.3s ease-in-out;

  &::placeholder {
    color: var(--black-50);
  }

  &:focus-visible {
    outline-color: transparent;
    width: calc(100% - 6rem);
    &::placeholder {
      color: transparent;
    }
  }
`;

const ResetButton = styled.button`
  position: absolute;
  right: 0;
  padding-block: 6px;
  border: none;
  background-color: transparent;
  font-family: InterVariable, sans-serif;
  font-size: 16px;
  color: var(--navy-blue-2);
`;

function SearchFrom(): ReactElement {
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IFormInput>({
    defaultValues: { query: '' },
  });

  useEffect(() => {
    // Создание дебаунс функции
    const debouncedSearch = _.debounce((query: string) => {
      api.searchServicesByQuery(query);
    }, 1000);

    if (debouncedQuery) {
      debouncedSearch(debouncedQuery);
    }

    // Очистка дебаунс функции, чтобы предотвратить утечки памяти
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedQuery]);

  useEffect(() => {
    const subscription = watch((value) => {
      setDebouncedQuery(value.query as string);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    console.log(errors);
    // reset()
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('query')}
        type="text"
        placeholder="Кино, музыка и другие сервисы"
      />
      <ResetButton onClick={() => reset()} type="reset">Отменить</ResetButton>
    </SearchForm>
  );
}

export default SearchFrom;
