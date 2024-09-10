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
                <span className="itemTitle">Total</span>: Approximately 10
                minutes
              </li>
              <li>
                <span className="itemTitle">Preparation</span>: 5 minutes
              </li>
              <li>
                <span className="itemTitle">Cooking</span>: 5 minutes
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
                <span className="itemTitle">Beat the eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li>
                <span className="itemTitle">Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className="itemTitle">Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="itemTitle">Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li>
                <span className="itemTitle">Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li>
                <span className="itemTitle">Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
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
                <td>
                  <span className="nutritionInfo">227kcal</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <hr class="spaced-hr" />
                </td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>
                  <span className="nutritionInfo">0g</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <hr class="spaced-hr" />
                </td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>
                  <span className="nutritionInfo">20g</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <hr class="spaced-hr" />
                </td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>
                  <span className="nutritionInfo">22g</span>
                </td>
              </tr>
            </table>
          </section>
        </div>
      </article>
    </main>
  );
};

export default RecipeCard;
