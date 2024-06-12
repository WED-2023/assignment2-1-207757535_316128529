<template>
<div>
    <h1>Create a new recipe</h1>
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Tilte:"
        label-for="input-1"
      >
        <b-form-input
          id="input-title"
          v-model="form.name"
          type="title"
          placeholder="Enter recipe title"
          required
        ></b-form-input>
      </b-form-group>

      <div>
            <b-form-file
            label="Image:"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose an image or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

            <!-- Plain mode -->
            <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
            <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
    </div>

      <b-form-group id="input-group-2" label="Summary:" label-for="input-2">
        <b-form-textarea
            id="input-2"
            v-model="text"
            placeholder="Enter description..."
            rows="3"
            max-rows="6"
            required
            ></b-form-textarea>
      </b-form-group>

      <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group> -->

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="isVegetarian">vegetarian</b-form-checkbox>
          <b-form-checkbox value="isVegan">vegan</b-form-checkbox>
          <b-form-checkbox value="isGlutenFree">Gluten free</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <!-- instructions -->
        <div class="instruction-container"> Add an instruction:
        <b-form-input v-model="text" :placeholder="`(${numOfInstructions}).`"></b-form-input>
        <div class="mt-2">Value: {{ instruction }}</div>
        <b-button variant="success" @click="AddInstruction" >+</b-button>
        <b-button variant="warning" @click="RemoveInstruction" >-</b-button>
        </div>
      <!-- ingredients -->

      <b-button type="submit" variant="primary">Create</b-button>
      <b-button type="reset" variant="danger">Cancel</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
   
</div>
</template>

<script>
  export default {
    data() {
      return {
        file1: null,
        file2: null,
        instructions: [],
        instruction: "",
        numOfInstructions: 1,
        ingredients:[],
        ingredient: "",
        numOfIngredients: 1
      }
    },
    methods:{
        AddInstruction(){
            this.instructions.push(this.instruction);
            this.numOfInstructions = this.numOfInstructions + 1;
        },
        RemoveInstruction(){
            this.instructions.pop();
            this.numOfInstructions = this.numOfInstructions - 1;

        }
    }
  }
</script>