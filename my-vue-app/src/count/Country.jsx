import './country.css'
const Country = ({country}) => {
    const {name, flags, area} = country
    return (
        <div className="design">
            <h3>Country: {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;