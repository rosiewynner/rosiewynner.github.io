<script>
import axios from 'axios'

import Feed from './feed.svelte'

    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fetch function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    </script>

<div className="container">
    {#each feeds as feed}
        <Feed key={feed.id} feed={feed} />
    {/each}
</div>


<style>
    .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 15px;
  }
  
  .container img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 100ms ease-out;
  }

  .container img:hover {
    transform: scale(1.04);
    filter: brightness(0.5);
    }

  .container img:hover + .caption {
    visibility: visible;
  }

  .caption:hover {
    visibility: visible;
  }

  .caption:hover .container img {
    transform: scale(1.04);
    filter: brightness(0.5);
  }
  .caption{
    visibility: hidden;
    width: 300px;
    margin-top: -310px;
    padding: 15px;
    color: white;
    position: absolute;
    align-content: center;
    justify-content: center;
    font-style: normal;
  }

  .post {
    position: relative;
  }

</style>