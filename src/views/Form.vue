<template>
  <div class="w-5/6 mx-auto">
    <h1 class="text-center text-2xl font-bold text-gray-700">Create an event</h1>
    <form class="w-3/4 mx-auto my-4 px-2" @submit.prevent="handleSubmit" novalidate>

    <p v-if="!st$.formValid" class="text-red-500">
        Please fill all the 'required' fields
    </p>

     <BaseSelect 
        label="Select a category"
        v-model="event.category"
        :options="categories"
        name="category"
        required 
        @blur="handleBlur"
        @focus="handleFocus"
        :error="st$.category.error ? st$.category.errorMessage : null"
     />

      <fieldset>
        <legend class="text-gray-500 font-bold py-2">Name & describe your event</legend>

        <BaseInput 
          v-model="event.title"
          label="Title"
          type="text"
          name="title"
          required 
          @blur="handleBlur"
          @focus="handleFocus"
          :error="st$.title.error ? st$.title.errorMessage : null"
        />

        <BaseInput 
          v-model="event.description"
          label="Description"
          type="text"
          name="description"
          required 
          @blur="handleBlur"
          @focus="handleFocus"
          :error="st$.description.error ? st$.description.errorMessage : null"
        />

      </fieldset>

      <fieldset>
        <legend class="text-gray-500 font-bold py-2">Where is your event?</legend>

        <BaseInput 
          v-model="event.location"
          label="Location"
          type="text"
          name="location"
          required 
          @blur="handleBlur"
          @focus="handleFocus"
          :error="st$.location.error ? st$.location.errorMessage : null"
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

      <hr>

      {{ extras }}

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
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import formValidate from '../composables/formValidate'
import { computed } from 'vue-demi'

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
      petOptions: [
        { label: 'Yes', value: 1},
        { label: 'No', value: 2}
      ]
    }
  },
  setup () {

    const store = useStore()

    const route = useRouter()
    

    const endPoint = 'http://localhost:3000/events'

    const createEventObject = () => {
      return {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 0,
        extras: {
          catering: false,
          music: false
        }
      }
    }

    let event = reactive(createEventObject())

    const extras = computed(() => {
      return Object.keys(event.extras).filter(key => event.extras[key])
    })

    const propsForValidation = {
      category: { required: true },
      title: { required: true },
      description: { required: true },
      location: { required: true },
    }

    const { handleBlur, handleFocus, isFormValid, st$ } = formValidate(propsForValidation)

    // const v$ = useValidate(rules, event, { $lazy: true })

    const handleSubmit = () => {
      if (!isFormValid(event)) return
      axios.post(
        endPoint,
        event
      )
      .then(response => {
        event = createEventObject()
        store.dispatch('addEvent', response.data)
        console.log('Response', response.data)
        route.push({name: 'EventList'})
      })
      .catch(err => {
        console.log('Error', err)
      })
    }

    return {
      event,
      st$,
      handleBlur,
      handleFocus,
      handleSubmit,
      extras
    }
  }
}
</script>