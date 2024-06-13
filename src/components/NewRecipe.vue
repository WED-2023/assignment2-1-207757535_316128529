<template>
  <div class="recipe-form-container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
           
      <!-- Title -->
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-title"
      >
        <b-form-input
          id="input-title"
          v-model="form.name"
          type="text"
          placeholder="Enter recipe title"
          required
        ></b-form-input>
      </b-form-group>

      <!-- Image -->
      <b-form-group class="select-image-container" label="Recipe image:">
        <div class="form-group">
          <b-form-file
            label="Image:"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose an image or drop it here..."
            drop-placeholder="Drop file here..."
            required
          ></b-form-file>
          <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
        </div>
      </b-form-group>

      <!-- Summary -->
      <b-form-group class="summary-container" label="Summary:" label-for="input-summary">
        <b-form-textarea
          id="input-summary"
          v-model="text"
          placeholder="Enter description..."
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>

      <!-- Time to make -->
      <b-form-group class="time-container" label="Time to make:">
        <b-form-timepicker v-model="time" show-seconds required :hour12="false"></b-form-timepicker>
      </b-form-group>

      <!-- Serving -->
      <b-form-group class="serving-container" label="Serving:">
            <b-form-spinbutton id="serving-sb" v-model="servingAmount" min="1" max="100"></b-form-spinbutton>
      </b-form-group>

      <!-- Vegan, Vegetarian, Gluten Free -->
      <b-form-group class="checkboxes-container" label="Dietary Options:">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes"
        >
          <b-form-checkbox value="isVegetarian">Vegetarian</b-form-checkbox>
          <b-form-checkbox value="isVegan">Vegan</b-form-checkbox>
          <b-form-checkbox value="isGlutenFree">Gluten Free</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <!-- Instructions -->
      <b-form-group class="instruction-container" label="Instructions:">
        <label>Add an instruction:</label>
        <template v-if="numOfInstructions === 1">
          <b-form-input v-model="instruction" :placeholder="`${numOfInstructions}. Enter instruction...`" required></b-form-input>
        </template>
        <template v-else>
             <b-form-input v-model="instruction" :placeholder="`${numOfInstructions}.`" required></b-form-input>
        </template>
        <b-icon variant="success" icon="plus" @click="AddInstruction"></b-icon>
        <b-icon variant="danger" icon="dash" @click="RemoveInstruction"></b-icon>
      </b-form-group>

     <!-- Ingredients -->
      <b-form-group class="ingredients-container" label="Ingredients:">
        <label>Add an ingredient:</label>
        <template v-if="numOfIngredients === 1">
          <b-form-input v-model="ingredientName" :placeholder="`${numOfIngredients}. Please enter here your ingredients name...`" required></b-form-input>
        </template>
        <template v-else>
             <b-form-input v-model="ingredientName" :placeholder="`${numOfIngredients}.`" required></b-form-input>
        </template>
        <!-- Ingredient details -->
        <div class="ingredients-details-container">
          <b-row class="mt-3">
              <b-form-group class="amount" label="Amount:">
                <b-form-spinbutton id="amount-sb" v-model="amount" min="1" max="100"></b-form-spinbutton>
              </b-form-group>
              <b-form-group class="units" label="Units:">
                <b-form-select v-model="selected" required>
                <b-form-select-option :value="null">Please select a unit measure</b-form-select-option>
                  <b-form-select-option value="Gram">Gram</b-form-select-option>
                  <b-form-select-option value="Kilogram">Kilogram</b-form-select-option>
                  <b-form-select-option value="Milliliter">Milliliter</b-form-select-option>
                  <b-form-select-option value="Liter">Liter</b-form-select-option>
                  <b-form-select-option value="Curt">Curt</b-form-select-option>
                  <b-form-select-option value="Teaspoon">Teaspoon</b-form-select-option>
                  <b-form-select-option value="Spoon">Spoon</b-form-select-option>
                  <b-form-select-option value="Cup">Cup</b-form-select-option>
                   </b-form-select>
              </b-form-group>
              <div class="ingredients-buttons-container">
                <b-icon 
                  variant="success" 
                  icon="plus" 
                  @click="AddIngredient" 
                  :style="{ fontSize: '24px' }" 
                  :disabled="isIngredientButtonDisabled"
                ></b-icon>
                <b-icon 
                  variant="danger" 
                  icon="dash" 
                  @click="RemoveIngredient" 
                  :style="{ fontSize: '24px' }"
                ></b-icon>
              </div>
          </b-row>
        </div>
      </b-form-group>


      <div class="buttons-container">
        <b-button type="submit" variant="success">Create</b-button>
        <b-button type="reset" variant="warning" @click="onReset">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mockAddUserRecipe } from "../services/user.js";

export default {
  name: 'NewRecipe',
  data() {
    return {
      show: true,
      file1: null,
      file2: null,
      form: {
        name: '',
        checked: [],
      },
      servingAmount: 0,
      instructions: [],
      instruction: "",
      numOfInstructions: 1,
      ingredients: [],
      ingredientName: "",
      numOfIngredients: 1,
      amount: 0,
      time: '00:00:00',
      text: '',
      selected: null,
      showToast: false
    }
  },
  computed: {
    isIngredientButtonDisabled() {
      return !this.ingredientName || !this.amount || !this.selected;
    }
  },
  methods: {
    AddInstruction() {
      if (this.instruction) {
        this.instructions.push(this.instruction);
        this.numOfInstructions += 1;
        this.instruction = "";
        this.$root.toast("Instruction added!", "This instruction was added to your current recipe", "success");
      }
    },
    RemoveInstruction() {
      if(this.numOfInstructions > 0){
         this.instructions.pop();
         this.numOfInstructions -= 1;
      }
      else
      {
          this.$root.toast("Problem encountered during instruction removal ", "You don't have any instruction for this recipe", "danger");
      }
     
    },
    AddIngredient() {
      if (this.isIngredientButtonDisabled) {
        this.showToast = true;
        return;
      }
      if (this.ingredientName && this.amount && this.selected) {
        this.ingredients.push({ name: this.ingredientName, amount: this.amount, unit: this.selected });
        this.numOfIngredients += 1;
        this.ingredientName = "";
        this.amount = 0;
        this.selected = null;
        this.$root.toast("Ingredient added!", "This ingredient was added to your current recipe", "success");
 
      }
    },
    RemoveIngredient() {
      if(this.numOfIngredients > 0){
        this.ingredients.pop();
        this.numOfIngredients -= 1;
      }
      else
      {
        this.$root.toast("Problem encountered during ingridient removal ", "You don't have any ingridient for this recipe", "danger");
      }
    },
    onSubmit(event) {
      event.preventDefault();
      const recipeDetails = {
        name: this.form.name,
        image: this.file1,
        summary: this.text,
        time: this.time,
        servings: this.servingAmount,
        dietaryOptions: this.form.checked,
        instructions: this.instructions,
        ingredients: this.ingredients
      };
      const response = mockAddUserRecipe(recipeDetails);
      if (response.status === 200 && response.response.data.success) {
        alert(response.response.data.message);
        this.show = false; // Close the form window
      } else {
        alert('Failed to add the recipe. Please try again.');
      }
    },
    onReset(event) {
      if(event != null){
        event.preventDefault();
      }
      this.form = {
        name: '',
        checked: [],
      };
      this.file1 = null;
      this.file2 = null;
      this.instructions = [];
      this.numOfInstructions = 1;
      this.ingredients = [];
      this.servingAmount = 0;
      this.numOfIngredients = 1;
      this.ingredientName = '';
      this.amount = 0;
      this.time = '00:00:00';
      this.text = '';
      this.selected = null;
    }
  }
}


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amaranth&family=Comfortaa:wght@300&family=Lemonada:wght@400;500&family=Mali:wght@200&family=Shadows+Into+Light+Two&family=Syncopate&display=swap");

.recipe-form-container {
  max-width: 800px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.b-form-group,
.form-group,
.ingredients-container,
.instruction-container,
.buttons-container {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
}

.instruction-container,
.ingredients-container {
  display: flex;
  align-items: center;
}

.instruction-container b-form-input,
.ingredients-container b-form-input {
  flex: 1;
  margin-right: 10px;
}

.ingredients-details-container {
  position: relative;
  display: inline-block;
}

.ingredients-buttons-container {
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.b-icon {
  cursor: pointer;
  margin-left: 10px;
  font-size: 24px;
}

.ingredients-buttons-container .b-icon {
  cursor: pointer;
  margin-left: 10px;
  font-size: 40px;
  display: inline-block;
  height: 50%;

}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .ingredients-container b-row {
    flex-direction: column;
  }

  .b-icon {
    margin-top: 10px;
  }
}
</style>
