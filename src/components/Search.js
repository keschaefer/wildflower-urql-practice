import React, { useState, useCallback } from 'react'
import { Button } from '@material-ui/core'
import { useQuery } from 'urql'
import gql from 'graphql-tag'
import FlowerCard from './FlowerCard'

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      flowers {
        id
        name
        color
        location
        description
        img
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

const Search = () => {
  const [filter, setFilter] = useState('')

  const [result, executeQuery] = useQuery({
    query: FEED_SEARCH_QUERY,
    variables: { filter },
    pause: true
  })

  const search = useCallback(() => {
    console.log('executing query')
    executeQuery()
  }, [executeQuery])

  const flowers = result.data ? result.data.feed.flowers : []
  return (
    <div>
      <div>
        Search
        <input type="text" onChange={e => setFilter(e.target.value)} />
        <Button onClick={search}>Go!</Button>
      </div>
      {flowers.map(flower => (
        <FlowerCard
          key={flower.id}
          name={flower.name}
          color={flower.color}
          location={flower.location}
          description={flower.description}
          img={flower.img}
          votes={flower.votes}
          createdAt={flower.createdAt}
          postedBy={flower.postedBy}
          id={flower.id}
        />
      ))}
    </div>
  )
}

export default Search
