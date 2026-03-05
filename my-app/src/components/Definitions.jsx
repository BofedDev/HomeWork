const Definitions = (props) =>{
    const createList = () => {
        const {data} = props;
        return data.map((item) => [<dt key={item.id}>{item.dt}</dt>, <dd key={item.id}>{item.dd}</dd>])

    }

    return(
        <dl>
            {createList()}
        </dl>
    )



}

export default Definitions;