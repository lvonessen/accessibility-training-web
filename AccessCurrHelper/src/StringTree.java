import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StringTree {

	// if it has children, the value gets ignored.
	// only leaves should have values
	private String value;
	private List<StringTree> children;

	private StringTree(Scanner scan) {
		readFile(scan);
		// while (children.size() == 1) {
		// value = children.get(0).value;
		// children = children.get(0).children;
		// }
	}

	public boolean isValue() {
		return children.isEmpty();
	}

	public String toJsonString() {
		return toString(children);
	}

	public static String toString(List<StringTree> list) {
		String str = "";
		/*
		 * 
		 * { "lo_what": { "id": "lo_what", "name":
		 * "Accessibility is about designing to take into account all kinds of abilities"
		 * , "arg":
		 * "This is important to web development because... (LO argument)",
		 * "material": [ "point 1", "point 2", ["subpoint1", "subpoint2"],
		 * "point 3" ], "options": [ "brief", "indepth", "activity" ] },
		 * "lo_kinds": { "id": "lo_kinds", "name":
		 * "There are many different kinds of disabilities (vision, hearing, cognitive, motor, etc), ranging from situational to permanent"
		 * , "arg":
		 * "This is important to web development because... (LO argument)",
		 * "material": [ "point 1", "point 2", ["subpoint1", "subpoint2"],
		 * "point 3" ], "options": [ "brief", "indepth", "activity" ] } }
		 * 
		 */

		for (int i = 0; i < list.size(); i++) {
			// process lo:
			String lo = list.get(i).value.split(":")[0].toLowerCase();
			str += ",\n\"" + lo + "\": {\n\"id\": \"" + lo + "\"";
			if (i == list.size() - 1) {
				str += "}";
				continue;
			}
			StringTree content = list.get(i + 1);
			if (content.isValue()) {
				str += "}";
				continue;
			} else {
				i++;
			}
			try {
				String title = content.children.get(0).value;
				str += ",\n\"name\": \"" + title + "\"";
				StringTree cont = content.children.get(1);

				str += ",\n\"material\": " + cont.toJsonList();
				String arg = content.children.get(2).value;
				str += ",\n\"arg\": \"" + arg + "\"";
			} catch (IndexOutOfBoundsException e) {

			}
			str += "}";
		}

		return str;
	}

	private String toJsonList() {
		String str = "";
		if (children.isEmpty()) {
			return "\"" + value + "\"";
		} else {
			for (StringTree child : children) {
				str += "," + child.toJsonList();
			}
		}
		return "[" + str.substring(1) + "]";
	}

	public static List<StringTree> readPage(String htmlFileName) {
		List<StringTree> list = new ArrayList<StringTree>();
		Scanner scan = null;
		try {

			File x = new File(htmlFileName);
			scan = new Scanner(x);

		} catch (IOException e) {
			e.printStackTrace();
			System.exit(1);
		}
		while (scan.hasNext()) {
			// discard up to starting tag
			String cur = scan.next();
			while (scan.hasNext() && (!(cur.startsWith("<li") || cur.startsWith("<ul")))) {
				cur = scan.next();
			}
			finishTag(cur, scan);

			// actually read
			list.add(new StringTree(scan));
		}

		return list;

	}

	// if you're not getting the output you expected,
	// try going into the file and replacing all
	// "<" with " <" and ">" with "> "
	// (also make sure there aren't any unexpected instances of < or >)
	public StringTree(String htmlFileName) {
		Scanner scan = null;
		try {

			File x = new File(htmlFileName);
			scan = new Scanner(x);

		} catch (IOException e) {
			e.printStackTrace();
			System.exit(1);
		}
		// discard up to starting tag
		String cur = scan.next();
		while (!(cur.startsWith("<li") || cur.startsWith("<ul"))) {
			cur = scan.next();
		}
		finishTag(cur, scan);

		// actually read
		readFile(scan);
	}

	private static void finishTag(String cur, Scanner scan) {
		while (!cur.endsWith(">")) {
			cur = scan.next();
		}
	}

	// pre-condition: we are NOT in the middle of a tag
	private void readFile(Scanner scan) {

		value = "";
		children = new ArrayList<StringTree>();
		while (scan.hasNext()) {
			String next = scan.next();
			// tag processing
			if (next.startsWith("<")) {
				// eat up extra tokens that are part of the same tag
				finishTag(next, scan);

				// done with current level
				if (next.startsWith("</li") || next.startsWith("</ul")) {
					// clean up value
					if (children.isEmpty()) {
						value = value.trim();
						value = value.replaceAll("&lt;", "<");
						value = value.replaceAll("&gt;", ">");
						value = value.replaceAll("\"", "\\\"");
					} else {
						value = "";
					}
					return;
				} else { // found sub-exp
					if (next.equals("<ul>") || next.startsWith("<li")) {
						children.add(new StringTree(scan));
					}
				}
			} else {
				// non-tag text
				value += " " + next;
			}
		}
	}

	private String toString(String indent) {
		if (children.isEmpty()) {
			return indent + value + "\n";
		} else {
			String str = "";
			for (StringTree child : children) {
				str += child.toString("  " + indent);
			}
			return str;
		}
	}

	public String toString() {
		return toString("- ").trim();
	}

	public static void main(String[] args) {
		String filename = "blah3.txt";
		List<StringTree> list = StringTree.readPage(filename);
		// StringTree st = new StringTree(filename);
//		System.out.println(list);
//
//		System.out.println("\n\nHi\n\n");
//		System.out.println(StringTree.toString(list));
//
//		System.out.println("\n\nHi\n\n");
		System.out.println(list.get(0).toJsonString());
	}
}
