// tagMapper.js
import { categories } from './categories.js';

// Create a dictionary: tag (lowercase) -> category_name
const rsoTagToOverall = {};

categories.forEach(category => {
  category.tags.forEach(tag => {
    rsoTagToOverall[tag.toLowerCase()] = category.category_name;
  });
});

// Maps an array of RSO tags to an array of their overall categories
export function mapTagsToOverall(rsoTags) {
  return rsoTags
    .map(tag => rsoTagToOverall[tag.toLowerCase()])
    .filter(Boolean);  // removes undefined (tags that don't exist in mapping)
}

// Filters an array of event objects by selected overall categories and a search query
export function filterEvents(events, selectedFilters, searchQuery) {
  const lowerSearch = searchQuery.toLowerCase();

  return events.filter(event => {
    const overallCategories = mapTagsToOverall(event.rsoTags);

    // Check if any overall category matches the selected filters
    const matchesOverall = overallCategories.some(cat => selectedFilters.includes(cat));

    // Check if search query matches any of the event text fields
    const matchesSearch = event.title.toLowerCase().includes(lowerSearch) ||
                          event.subtitle.toLowerCase().includes(lowerSearch) ||
                          event.details.toLowerCase().includes(lowerSearch);

    return matchesOverall && matchesSearch;
  });
}
