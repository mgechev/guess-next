import Layout from '../components/layout';

export default () => (
  <Layout>
    Here's how you can configure Guess.js:
    <div class="highlight">
      <pre class="chroma">
        <code class="language-javascript" data-lang="javascript">
          <span class="k">new</span> <span class="nx">GuessPlugin</span>
          <span class="p">{'({'}</span>
          <br />
          <span class="c1"> </span>
          <span class="c1">// GA view ID.</span>
          <br />
          <span class="c1" /> <span class="nx">GA</span>
          <span class="o">:</span> <span class="nx">GAViewID</span>
          <span class="p">,</span>
          <br />
          <span class="c1"> </span>
          <span class="c1">// Hints Guess to not perform pre-fetching and delegate this logic to</span>
          <br />
          <span class="c1" /> <span class="c1">// its consumer.</span>
          <br />
          <span class="c1" /> <span class="nx">runtime</span>
          <span class="o">:</span> <span class="p">{'{'}</span>
          <span class="nx">delegate</span>
          <span class="o">:</span> <span class="kc">true</span>
          <span class="p">,</span>
          <span class="p">},</span>
          <br />
          <span class="c1"> </span>
          <span class="c1">// Since Gatsby already has the required metadata for pre-fetching,</span>
          <br />
          <span class="c1" /> <span class="c1">// Guess does not have to collect the routes and the corresponding</span>
          <br />
          <span class="c1" /> <span class="c1">// bundle entry points.</span>
          <br />
          <span class="c1" /> <span class="nx">routeProvider</span>
          <span class="o">:</span> <span class="kc">false</span>
          <span class="p">,</span>
          <br />
          <span class="c1"> // Optional argument. It takes the data for the last year if not</span>
          <span class="c1" />
          <br />
          <span class="c1"> // specified.</span>
          <br />
          <span class="c1" /> <span class="nx">period</span>
          <span class="o">:</span> <span class="nx">period</span> <span class="o">?</span>{' '}
          <span class="nx">period</span> <span class="o">:</span> <span class="kc">undefined</span>
          <span class="p">,</span>
          <br />
          <span class="p">})</span>
        </code>
      </pre>
    </div>
  </Layout>
);
