<template>
  <div class="w-5/6 mx-auto">
    <h1 class="text-center text-2xl font-bold text-gray-700">Create an event</h1>
    <form class="w-3/4 mx-auto my-4 px-2" @submit.prevent="handleSubmit">

     <BaseSelect 
        label="Select a category"
        v-model="event.category"
        :options="categories"
     />

      <fieldset>
        <legend class="text-gray-500 font-bold py-2">Name & describe your event</legend>

        <BaseInput 
          v-model="event.title"
          label="Title"
          type="text"
        />

        <BaseInput 
          v-model="event.description"
          label="Description"
          type="text"
        />

      </fieldset>

      <fieldset>
        <legend class="text-gray-500 font-bold py-2">Where is your event?</legend>

        <BaseInput 
          v-model="event.location"
          label="Location"
          type="text"
        />
      </fieldset>
      
      
      <fieldset>
        <legend class="text-gray-500 font-bold py-2">Pets</legend>
         <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup 
            v-model="event.pets"
            name="pets"
            :options="petOptions"
            vertical
          />
        </div>
      </fieldset>

     
      <fieldset>
         <h3 class="text-gray-500 font-bold py-2">Extras</h3>
        <div>
          <BaseCheckbox 
              v-model="event.extras.catering"
              label="Catering"
          />
        </div>

        <div>
          <BaseCheckbox 
              v-model="event.extras.music"
              label="Live music"
          />
        </div>
      </fieldset>

     

      <hr class="my-4">

      <button 
        type="submit"
        class="bg-green-500 hover:bg-green-700 text-gray-50 font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      endPoint : 'https://my-json-server.typicode.com/mnazarani/vue-form-components/events',
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 0,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1},
        { label: 'No', value: 2}
      ]
    }
  },
  methods: {
    handleSubmit() {
      axios.post(
        this.endPoint,
        this.event
      )
      .then(response => {
        console.log('Response', response)
      })
      .catch(err => {
        console.log('Error', err)
      })
    }
  }
}
</script>