import omelette from "../assets/images/image-omelette.jpeg";

const RecipeCard = () => {
  return (
    <main>
      <article>
        <img alt="image-omelette" src={omelette} />
        <div className="textContent">
          <section className="title">
            <h1>Simple Omelette Recipe</h1>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </section>
          <section className="preparation">
            <h2>Preparation time</h2>
            <ul>
              <li>
                <div className="listItem">
                  <h3>Total</h3>: Approximately 10 minutes
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Preparation</h3>: 5 minutes
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Cooking</h3>: 5 minutes
                </div>
              </li>
            </ul>
          </section>
          <section className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
          <hr />
          <section className="instructions">
            <h2>Instructions</h2>
            <ol>
              <li>
                <div className="listItem">
                  <h3>Beat the eggs</h3>: In a bowl, beat the eggs with a pinch
                  of salt and pepper until they are well mixed. You can add a
                  tablespoon of water or milk for a fluffier texture.
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Heat the pan</h3>: Place a non-stick frying pan over
                  medium heat and add butter or oil.
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Cook the omelette</h3>: Once the butter is melted and
                  bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                  evenly coat the surface.
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Add fillings (optional)</h3>: When the eggs begin to set
                  at the edges but are still slightly runny in the middle,
                  sprinkle your chosen fillings over one half of the omelette.
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Fold and serve</h3>: As the omelette continues to cook,
                  carefully lift one edge and fold it over the fillings. Let it
                  cook for another minute, then slide it onto a plate.
                </div>
              </li>
              <li>
                <div className="listItem">
                  <h3>Enjoy</h3>: Serve hot, with additional salt and pepper if
                  needed.
                </div>
              </li>
            </ol>
          </section>
          <hr />
          <section className="nutrition">
            <h2>Nutrition</h2>
            The table below shows nutritional values per serving without the
            additional fillings.
            <table>
              <tr>
                <td>Calories</td>
                <td>227kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </table>
          </section>
        </div>
      </article>
    </main>
  );
};

export default RecipeCard;
