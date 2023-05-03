import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import './Landing.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch('/api/user');
        const userData = await userRes.json();
        setUser(userData);

        const propertiesRes = await fetch('/api/properties');
        const propertiesData = await propertiesRes.json();
        setProperties(propertiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, navigate, loading]);

  const handleAddPropertyClick = () => {
    setShowAddProperty(!showAddProperty);
  };

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('/api/property/createProperty', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const newProperty = await response.json();
        setProperties([...properties, newProperty]);
        setShowAddProperty(false);
      } else {
        console.error('Error creating property:', await response.json());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <h1>Profile</h1>
        <div className="mt-5">
        <div className="col-6">
          <div>
            <p>
              <strong>User Name</strong>: {user.name}
            </p>
            <p>
              <strong>Email</strong>: {user.email}
            </p>
          </div>
        </div>
        <div className="col-6">
          <h3>My Properties</h3>
          <ol>
            {properties.map((property) => (
              <li key={property._id} className="col-6 justify-content-between mt-5">
                <a href={`/property/${property._id}`}>
                  <p>{property.address}</p>
                </a>
              </li>
            ))}
          </ol>
          <button id="addPropertyBtn" onClick={handleAddPropertyClick}>
            Add Property
          </button>
          {showAddProperty && (
            <div className="addPropertyContainer">
              <form action="/api/property/createProperty" enctype="text/html" method="POST">
                  <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address" />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" />
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="inputCity">City</label>
                      <input type="text" class="form-control" id="inputCity" name="city" />
                    </div>
                    <div class="state-container">
                      <div class="form-group">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control" name="state">
                            <option selected>Choose...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
                      </div>
                      <div class="form-group">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" name="zip" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary" value="Upload">Add Property</button>
              </form>
            </div>
          )}
        </div>
      </div>
      </>
    )}
    </div>
  );
}

export default Profile;
