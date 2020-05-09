import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { requestCountry, removeCountry } from '../../store/country-page/actions';
import { parseLocation } from '../../utils/parseLocation';
import { CountryButton } from '../../Components/CountryButton';
import { CountryItem } from '../../Components/CountryItem';

const StyledCountryWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 4px 10px -4px rgba(0, 0, 0, 0.15);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
`

const CountryItemWrapper = styled.div`
  padding-top: 80px;
`

export const CountryWrapper = ({ location }) => {

  const countryCode = parseLocation(location.pathname)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCountry(countryCode))

    return () => {
      dispatch(removeCountry())
    }
  }, [countryCode, dispatch])

  return (
    <StyledCountryWrapper>
      <div className="container">
        <CountryItemWrapper>
          <CountryButton />
          <CountryItem />
        </CountryItemWrapper>
      </div>
    </StyledCountryWrapper>
  )
}
