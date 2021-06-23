import React, {useState} from 'react';
import MainPageLayout from '../Components/MainPageLayout'
import {apiGet} from '../misc/config';
import ShowGrid from '../Components/show/ShowGrid';
import ActorGrid from '../Components/actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
import CustomRadio from '../Components/CustomRadio';

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isShowSearch = searchOption === 'shows'


    
    const onInputChange =  (ev) => {
        setInput(ev.target.value)
    }

    const onKeyDown =  (ev) => {
        if(ev.which === 13) {
            onSearch()
        }
       
    }
    const renderResults = () => {
        if(results && results.length === 0) {
          return  <div>No Result</div>
        }
        if(results && results.length > 0) {
          return results[0].show ? <ShowGrid data = {results}/> : <ActorGrid data = {results}/>;
        }
        return null;
    }

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)})
    }

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
        // console.log(setSearchOption)
    }
    
    return (
        <MainPageLayout>
          <SearchInput type="text" onChange = {onInputChange} onKeyDown={onKeyDown} value = {input} placeholder = "search for a movie"/>
          <RadioInputsWrapper>
              <div>
                  <CustomRadio label="Shows" id = "shows-search" value = "shows"  onChange = {onRadioChange} checked= {isShowSearch} />
              </div>
              <div>
              <CustomRadio label="Actors" id = "actors-search" value = "people"  onChange = {onRadioChange} checked= {!isShowSearch} />
              </div>
          </RadioInputsWrapper>
          <SearchButtonWrapper>
          <button onClick = {onSearch}>Search</button>
          </SearchButtonWrapper>
          {renderResults()}
          
        </MainPageLayout>
    )
}

export default Home
