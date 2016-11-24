#Jekyll

##Installation


##Theme
###Créer un nouveau thème
jekyll new-theme nom-du-theme

Remplir nom-du-theme.gemspec comme demandé
Voir le thème cd/nom-du-theme, jekyll serve

https://www.chrisanthropic.com/blog/2016/creating-gem-based-themes-for-jekyll/

Utiliser le templating avec {{}}

Mettre dans _include : head, header et footer.html et tout ce qui revient sur toutes les pages

Afficher liste par catégories et billets sous chaque catégorie
<ul class="tag-box inline">
{% assign tags_list = site.categories %}  
  {% if tags_list.first[0] == null %}
    {% for tag in tags_list %} 
      <li><a href="#{{ tag }}">{{ tag | capitalize }} <span>{{ site.tags[tag].size }}</span></a></li>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %} 
      <li><a href="#{{ tag[0] }}">{{ tag[0] | capitalize }} <span>{{ tag[1].size }}</span></a></li>
    {% endfor %}
  {% endif %}
{% assign tags_list = nil %}
</ul>

{% for tag in site.categories %} 
  <h2 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h2>
  <ul class="post-list">
    {% assign pages_list = tag[1] %}  
    {% for post in pages_list %}
      {% if post.title != null %}
      {% if group == null or group == post.group %}
      <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}<span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></a></li>
      {% endif %}
      {% endif %}
    {% endfor %}
    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}