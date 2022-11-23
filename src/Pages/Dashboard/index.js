import React, { useState, useEffect } from 'react';
import axios from 'axios'
import faker from "faker";

import CommentDetail from "../../Components/CommentDetail";
import ApprovalCard from "../../Components/ApprovalCard";
import LoadingScreen from '../../Components/loadingScreen';
import SeasonDisplay from '../../Components/seasonDisplay';
import SearchBar from '../../Components/searchBar';
import  ListToDo  from "../../Components/ListTODO";

//function called from child.. :)
const onSearchSubmit = (term) => {
  console.log(term);
  axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: 'Client-ID D_cEk-B_vL73IKKYAURlNe8uuaNuOOXi5cpsfvDUx0g'
    }
  })
}
const App = () => {


    useEffect(() => {

      setTimeout(() => setSpinner(false), 1000)
    }, []);
  

  const [spinner, setSpinner] = useState(true);

    // setSpinner(false, ()=> {});

  if (spinner) {
    return <div><LoadingScreen /></div>
  }
  else {
    return (
      <div className="ui container comments">
        <ListToDo />
        <SearchBar onSubmit={onSearchSubmit} />
        {/* <SeasonDisplay /> */}
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            content="Nice blog post"
            avatar={faker.image.image()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Today at 2:00AM"
            content="I like the subject"
            avatar={faker.image.image()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Jane"
            timeAgo="Yesterday at 5:00PM"
            content="I like the writing"
            avatar={faker.image.image()}
          />
        </ApprovalCard>
      </div>
    )

  }
};
export default App;