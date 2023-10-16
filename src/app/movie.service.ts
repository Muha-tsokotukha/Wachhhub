import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '95f33f78f3msh0b794b4f7b0e667p1fed64jsne673bd642b87'; // Replace with your actual API key

  async getMovies(pageUrl: string = '/titles') {
    const options = {
      method: 'GET',
      url: `https://moviesdatabase.p.rapidapi.com${pageUrl}`, // Pass the provided page URL here
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error so that the component can handle it
    }
  }
}
