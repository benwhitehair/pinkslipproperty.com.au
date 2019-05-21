import React from 'react';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        className="p-4 w-full md:w-1/2"
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input
              id="bot-field"
              name="bot-field"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label
            className="block font-bold mb-6 text-xs tracking-wide uppercase"
            htmlFor="name"
          >
            <span className="block mb-2">Full name:</span>
            <input
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-base w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="name"
              name="name"
              onChange={this.handleChange}
              required
              type="text"
            />
          </label>
        </p>
        <p>
          <label
            className="block font-bold mb-6 text-xs tracking-wide uppercase"
            htmlFor="phone"
          >
            <span className="block mb-2">Phone number:</span>
            <input
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-base w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="phone"
              name="phone"
              onChange={this.handleChange}
              required
              type="text"
            />
          </label>
        </p>
        <p>
          <label
            className="block font-bold mb-6 text-xs tracking-wide uppercase"
            htmlFor="email"
          >
            <span className="block mb-2">Email address:</span>
            <input
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-base w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="email"
              name="email"
              onChange={this.handleChange}
              type="email"
            />
          </label>
        </p>
        <p>
          <label
            className="block font-bold mb-6 text-xs tracking-wide uppercase"
            htmlFor="message"
          >
            <span className="block mb-2">Message:</span>
            <textarea
              className="appearance-none bg-grey-lighter block border h-48 leading-tight px-4 py-3 rounded-none text-base text-grey-darker w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="message"
              name="message"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p className="flex justify-end">
          <button
            className="bg-indigo-darker font-bold font-condensed inline-block px-12 py-4 no-underline shadow text-white uppercase"
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    );
  }
}
