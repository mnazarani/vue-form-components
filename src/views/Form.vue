<template>
  <div class="w-5/6 mx-auto">
    <h1 class="text-center text-2xl font-bold text-gray-700">Create an event</h1>
    <form class="w-3/4 mx-auto my-4 px-2" @submit.prevent="handleSubmit">

     <BaseSelect 
        label="Select a category"
        v-model="event.category"
        :options="categories"
     />

      <h3>Name & describe your event</h3>

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

      <h3>Where is your event?</h3>

      <BaseInput 
        v-model="event.location"
        label="Location"
        type="text"
      />
      

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup 
          v-model="event.pets"
          name="pets"
          :options="petOptions"
          vertical
        />
      </div>
      

      <h3>Extras</h3>
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

      <hr class="my-4">

      {{ event }}

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
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
      console.log(this.event)
    }
  }
}
</script>